# if year is not divisible by 4 then common year
# else if year is not divisible by 100 then leap year
# else if year is not divisible by 400 then common year
# else leap year

class LeapYear

  def self.leap_year?(year)
    return 'idiot' if year.to_s.empty?
    return false if year % 4 != 0
    return false if year % 100 != 0
    return false if year % 400 != 0
    true
  end

  def hello
    "hi"
  end

end

# def test(message, actual, expected)
#   if actual == expected
#     puts "winning #{message}"
#   else
#     puts "losing #{message}"
#   end
# end

# test 'leap year', leap_year?(2000), true
# test 'non leap year', leap_year?(2007), false
# test 'year 1', leap_year?(1), false
# test 'empty string', leap_year?(''), false




