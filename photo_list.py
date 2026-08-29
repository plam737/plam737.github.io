import os

listing_airlines = os.listdir(r"C:\Users\Peter\Documents\Personal-Website\assets\planespotting")
airline_list = []
for item in listing_airlines:
    item = item.replace(".jpg", "")
    airline_list.append(item)
print(f"\nList for Aviation Photography: {airline_list}\n\n")

listing_travel = os.listdir(r"C:\Users\Peter\Documents\Personal-Website\assets\travelphotography")
travel_list = []
for item in listing_travel:
    item = item.replace(".jpg", "")
    travel_list.append(item)
print(f"List for Travel Photography: {travel_list}\n")