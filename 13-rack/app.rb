class Application

  def call(env_hash)
    Song.new("Lost Highway")
    Song.new("Alone in Kyoto")
    Song.new("N Dey Say")
    Song.new("Fantasia on A Theme by Thomas Tallis")

    req = Rack::Request.new(env_hash)
    resp = Rack::Response.new

    if req.path.match(/songs/)
      song_list_items = Song.all.map{ |song| "<li>#{song.name}</li>" }.join
      resp.write("
          <h1>Songs List</h1>
          <ul>
            #{song_list_items}
          </ul>
        ")
    elsif req.path.match(/artists/)
      resp.write("<h1>Artists List</h1>")
    else  
      resp.write("<h1>Not Found</h1>")
    end

    resp.finish
  end
end
