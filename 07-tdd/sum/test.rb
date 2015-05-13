require_relative 'sum'
require 'minitest/autorun'
require 'minitest/reporters' # optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new # optional

describe Dim do

  it 'work out sum of 3 under 10' do
    @dim = Dim.new(3)
    @dim.sum.must_equal 18
  end

  it 'work out sum of 5 under 10' do
    @dim = Dim.new(5)
    @dim.sum.must_equal 15
  end

  it 'work out sum of 3 and 5 under 10' do
    @dim = Dim.new(3,5)
    @dim.sum.must_equal 33 
  end

  it 'work out sum of 3 even if 2 exact numbers' do
    @dim = Dim.new(3,3)
    @dim.sum.must_equal 18
  end

  it 'work out sum of 3 for numbers under 30' do
    @dim = Dim.new(3)
    @dim.sum(30).must_equal 
  end

  # bonus
  it 'work out sum of any number of numbers eg 3,4,5' do
    skip
  end

end
