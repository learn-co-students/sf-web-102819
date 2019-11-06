class Tweet
  # Setter and getter macros
  attr_accessor :message, :username
  attr_reader :id

  # Class variable(s)
  @@tweets = []

  # Initialize a Tweet instance with a message and username,
  # save to the DB, and set the id of the instance based on the table key.
  def initialize(props = {})
    @message = props['message']
    @username = props['username']
    @id = props['id']
    unless in_db?
      save
      set_instance_id
    end
    @@tweets << self
  end

  # Put the C in CRUD with #save
  # tweet = Tweet.new({'username' => 'coffee_dad', 'message' => 'coffee'})
  def save
    # if tweet instance already in db, update
    if in_db?
      update
    else
      sql = <<-SQL
        INSERT INTO tweets (message, username)
        VALUES (?, ?);
      SQL
    end

    DB[:conn].execute(sql, self.message, self.username)
  end

  # Helper method to detect existing tweet
  def in_db?
    sql = <<-SQL
      SELECT * FROM tweets
      WHERE message = ? AND username = ?;
    SQL

    result = DB[:conn].execute(sql, self.message, self.username)

    result == [] ? false : true
  end

  # Return the key of the last instance of the tweets DB table
  def set_instance_id
    sql = <<-SQL
      SELECT id FROM tweets
      ORDER BY id DESC
      LIMIT 1;
    SQL

    results = DB[:conn].execute(sql)

    @id = results[0]["id"]
  end

  # Put the R in CRUD with .all!
  # Return an array of all Tweet instances
  def self.all
    sql = <<-SQL
      SELECT * FROM tweets;
    SQL

    results = DB[:conn].execute(sql)

    if @@tweets.empty?
      results.map do |result|
        Tweet.new(result)
      end
    end

    @@tweets
  end

  # Put the R in CRUD with .find_by
  def self.find_by_id(id)
    @@all.find { |tweet| tweet.id == id }
  end

  # Put the U in CRUD with #update
  def update
    sql = <<-SQL
      UPDATE tweets 
      SET message = ?, username = ?
      WHERE id = ?;
    SQL

    DB[:conn].execute(sql, self.message, self.username, self.id)
  end

  # Put the D in CRUD with .delete_all
  def self.delete_all
    @@tweets.clear

    sql = <<-SQL
      DELETE FROM tweets;
    SQL

    DB[:conn].execute(sql)
  end
end
