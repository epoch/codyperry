secret = Random.rand(10) + 1


def read_guess()
  print "guess a number between 1 - 10: "
  gets.chomp.to_i
end


guess = read_guess()

while guess != secret

  if guess > secret
    puts "guess higher"
  elsif guess < secret
    puts "guess lower"
  end

  guess = read_guess()

end

puts "win"
