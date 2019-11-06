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
    save
  end

  # Put the C in CRUD with #save
  # tweet = Tweet.new({'username' => 'coffee_dad', 'message' => 'coffee'})
  def save
    if in_db?
      puts "Updating existing instance!"
    else
      sql = <<-SQL
        INSERT INTO tweets (username, message) VALUES (?, ?);
      SQL

      DB[:conn].execute(sql, username, message)
      set_instance_id
      puts "Creating new instance!" 
    end
  end

  # Helper method to detect existing tweet
  def in_db?
    sql = <<-SQL
      SELECT * FROM tweets
      WHERE username == ? AND message == ?;
    SQL

    executed_sql = DB[:conn].execute(sql, username, message)

    !executed_sql.empty?
  end

  # Return the key of the last instance of the tweets DB table
  def set_instance_id
    sql = <<-SQL
      SELECT * FROM tweets
      ORDER BY id DESC
      LIMIT 1;
    SQL

    executed_sql = DB[:conn].execute(sql)
    @id = executed_sql.first["id"]
  end

  # Put the R in CRUD with .all!
  # Return an array of all Tweet instances
  def self.all
    
  end

  # Put the R in CRUD with .find_by
  def self.find_by_id(id)
    
  end

  # Put the U in CRUD with #update
  def update
    
  end

  # Put the D in CRUD with .delete_all
  def self.delete_all
    
  end
end
