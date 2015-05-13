class Dim

  def initialize(num1, num2 = nil)
    @num1 = num1
    @num2 = num2
  end

  def sum(max_num = 10)
    total = 0
    (1..max_num).to_a.each do |num|
      # add to total if num is divisible by 3
      total = total + num if num % 3 == 0
    end
    return total
  end

end