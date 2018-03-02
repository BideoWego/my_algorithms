class Zombie
  def tweets
    Tweet.where(:zombie_id => id)
  end
end


class Tweets
  def zombie
    Zombie.find(zombie_id)
  end
end

