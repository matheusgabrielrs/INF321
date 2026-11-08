defmodule KitchenCalculator do
  def get_volume(volume_pair) do
    {_, num} = volume_pair
    num
  end

  def to_milliliter({:milliliter, num}), do: {:milliliter, num}
  def to_milliliter({:cup, num}), do: {:milliliter, num*240}
  def to_milliliter({:fluid_ounce, num}), do: {:milliliter, num*30}
  def to_milliliter({:teaspoon, num}), do: {:milliliter, num*5}
  def to_milliliter({:tablespoon, num}), do: {:milliliter, num*15}

  def from_milliliter({:milliliter, num}, :milliliter), do: {:milliliter, num}
  def from_milliliter({:milliliter, num}, :cup), do:  {:cup, num/240}
  def from_milliliter({:milliliter, num}, :fluid_ounce), do: {:fluid_ounce, num/30}
  def from_milliliter({:milliliter, num}, :teaspoon), do:  {:teaspoon, num/5}
  def from_milliliter({:milliliter, num}, :tablespoon), do: {:tablespoon, num/15}
 
  def convert(volume_pair, target_unit) do
      to_milliliter(volume_pair) |> from_milliliter(target_unit)
  end
end
