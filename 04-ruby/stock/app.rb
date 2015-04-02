require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

# def present?(thing)
#   !thing.nil? && !thing.empty?
# end

get '/' do
  #if present?(params[:stock_symbal])
  if !params[:stock_symbal].nil? && !params[:stock_symbal].empty?
    @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock_symbal])
    @price = @result[params[:stock_symbal]].lastTrade
  end

  erb :index
end

# get '/stock' do
#   @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock_symbal])

#   @price = @result[params[:stock_symbal]].lastTrade

#   erb :show_stock
# end