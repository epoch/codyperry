require_relative 'aden'
require 'minitest/autorun'
require 'minitest/reporters' # optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new # optional

class AdenTest < MiniTest::Test

  def setup
    @aden = Aden.new
  end

  def teardown
  end  

  def test_statement
    assert_equal 'whatever', @aden.talk('hi')
  end

  def test_question
    assert_equal 'sure', @aden.talk('how old are you?')
  end

  def test_question_mark_in_middle_of_message
    assert_equal 'whatever', @aden.talk('wh?a is this')
  end

  def test_yelling
    assert_equal 'woah chill out', @aden.talk('DIE')
  end

  def test_all_caps_and_question_its_yelling
    assert_equal 'woah chill out', @aden.talk('ADEN?')
  end
end