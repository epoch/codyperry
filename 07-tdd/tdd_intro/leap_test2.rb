require 'minitest/autorun'
require 'minitest/reporters' # optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new # optional

require_relative 'leap'

# spec style

describe LeapYear do

  before do # setup for each test case
    @leap = LeapYear.new
  end

  it 'returns true when its a leap year' do
    LeapYear.leap_year?(2000).must_equal true
  end

  it 'returns false when its not a leap year' do
    LeapYear.leap_year?(1997).must_equal false
  end

  it 'hello should return hi' do
    @leap.hello.must_equal 'hi'
  end

end