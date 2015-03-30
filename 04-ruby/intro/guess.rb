secret = Random.rand(10) + 1

print "guess a number between 1 - 10: "
guess = gets.chomp.to_i

while guess != secret

  if guess > secret
    puts "guess higher"
  elsif guess < secret
    puts "guess lower"
  end

  print "guess a number between 1 - 10: "
  guess = gets.chomp.to_i  

end

puts "win"
