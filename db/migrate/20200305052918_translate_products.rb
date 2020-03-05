class TranslateProducts < ActiveRecord::Migration[6.0]
  def self.up
    Product.create_translation_table!
  end

  def self.down
    Product.drop_translation_table!
  end
end
