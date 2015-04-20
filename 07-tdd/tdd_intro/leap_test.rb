require 'minitest/autorun'
require 'minitest/reporters' # optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new # optional

require_relative 'leap'

class LeapYearTest < MiniTest::Test

  def test_leap_year
    assert_equal true, leap_year?(2000)
  end

  def test_not_leap_year
    assert_equal 'hello', leap_year?(1997)
  end

  def test_empty_string_as_input
    assert_equal false, leap_year?('')
  end

end