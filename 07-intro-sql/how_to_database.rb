require 'sqlite3'
require 'pry'
require 'faker'


db = SQLite3::Database.new('chinook.db')

# Pry.start

sql_select_all_artist_rows = "SELECT * FROM artists;"
sql_select_black_sabbath = "SELECT * FROM artists WHERE name = 'Black Sabbath';"
sql_create_table_fans = <<SQL
CREATE TABLE fans (
    fan_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);
SQL
sql_alter_table_fans = "ALTER TABLE fans ADD artist_id INTEGER;"

db.execute(sql_create_table_fans)
db.execute(sql_alter_table_fans)

20.times do
    db.execute("INSERT INTO fans (name, artist_id) VALUES (\"#{Faker::Name.name}\", #{rand(1..100)});")
end

# etc...
