
get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  # If the user passes-in a "value", let's use it. Otherwise, we'll generate a random one.
  # See: roll_if_value_is_nil method in the Roll model.
  puts "*" * 80
  p params

  value = params[:value] ? params[:value].to_i : nil

  if request.xhr?
    @roll = Roll.create({value: value})
    erb :_roll, :layout => false
  else 
    @roll = Roll.create
    erb :index
  end
end
