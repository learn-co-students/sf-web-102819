class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :gender
  # belongs_to :species

  def species
    object.species.name
  end
end
