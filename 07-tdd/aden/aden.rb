class Aden

  def talk(message)
    case
    when yelling?(message)
      "woah chill out"
    when question?(message)
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