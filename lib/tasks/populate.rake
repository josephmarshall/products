namespace :populate do
  desc "TODO"
  task games: :environment do
    20.times do
      game = Game.create(name: Faker::Zelda.game, description: Faker::Games::Zelda.item)
      5.times { Character.create(name: Faker::Zelda.character, superpower: Faker::Superhero.power, game_id: game.id) }
    end
  end

end
