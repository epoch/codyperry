
  print "What is the current temp? " 
  current_temp = gets.chomp.to_i 
  print "Is the air con operational (y/n) "
  # true is Y, or y, false otherwise
  working_air_con = (gets.chomp.downcase == 'y')  
  print "what is the desired temp? "
  desired_temp = gets.chomp.to_i


def air_con(working_air_con, current_temp, desired_temp)
  if working_air_con

    if current_temp > desired_temp
      puts "Turn on the air con please"
    end

  else
    # no working air con
    if current_temp > desired_temp
      puts "fix the air con, its hot!"
    elsif current_temp < desired_temp
      puts "fix the air con when you have time. its cool"
    end
    
  end
end

air_con(working_air_con, current_temp, desired_temp)




