# if year is not divisible by 4 then common year
# else if year is not divisible by 100 then leap year .....

def leap_year?(year)
  return false if year % 4 != 0
  return false if year % 100 != 0
  return false if year % 400 != 0
  true
end


leap_year?(2000)