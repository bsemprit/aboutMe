require 'sinatra'
require 'sinatra/reloader' if development?



get "/" do
	erb :start
end

get "/left" do
	erb :left
end

get "/right" do
	erb :right
end