require_relative 'hipster'
require 'minitest/autorun'
require 'minitest/reporters' # optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new # optional

describe Hipster, "minitest syntax reference" do

  # runs codes before each test
  before do
    @hipster = Hipster.new
  end

  let :hipster do
    Hipster.new
  end

  it '#define' do
    hipster.define.must_equal "you don't understand"
  end

  it '#walk?' do
    skip "I prefer to skip"
  end

  it '#labels' do
    hipster.labels.must_be_empty
    # hipster.labels == []
  end

  describe "when asked about the font" do
    it "should be helvetica" do
      hipster.preferred_font.must_equal "helvetica"
    end
  end

  describe "when asked about mainstream" do
    it "won't be mainstream" do
      hipster.mainstream?.wont_equal true
    end
  end

end
