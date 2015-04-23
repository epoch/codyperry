class Aden

  def talk(message)
    if yelling?(message)
      "woah chill out"
    elsif question?(message)
      "sure"
    else
      "whatever"
    end
  end

  def yelling?(message)
    message == message.upcase
  end

  def question?(message)
    message.end_with? '?'
  end

end