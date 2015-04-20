class Phone

  def initialize(number)
    @number = number
  end

  def number
    @number = @number
      .gsub('(','')
      .gsub(')','')
      .gsub(' ','')
      .gsub('-','')
      .gsub('.','')

    if @number.length == 11 && @number[0] == '1'
      @number[1..-1]
    elsif @number.length == 11 && @number[0] != '1'
      "0000000000"
    else
      @number
    end
  end

end


# p = Phone.new("(123) 456-7890")
# p.number #=> "1234567890"