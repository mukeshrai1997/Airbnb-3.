const apiKey = "58089128afmsh13e42a6a1098d66p1074bdjsnc13d696908d5";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const listingsContainer = document.getElementById("listings-container");

const listings =  {"data" :
[{
      "id": "39618986",
      "url": "https://www.airbnb.com/rooms/39618986",
      "deeplink": "https://www.airbnb.com/rooms/39618986?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 1,
      "name": "sanjay puris room  two",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "New Delhi",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/db15bf2f-d52d-4216-852a-061cda928966.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/0bc7c397-92b9-44a9-bec8-1e3989fb7fd5.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/e03c7016-6dbc-4f05-aead-60c5b1e7a4cb.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/c1d2b1ea-285b-4aff-86aa-3c1faa9aa1b4.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/68b06618-bb93-4e97-b432-0df384704271.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/c12d89a3-c2b1-41bb-8bd5-5c028a8baf85.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/a63e2c58-b41c-4895-9aca-151785e02ea0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/f124ec27-0f2e-44bc-9e22-0d7c69924560.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/0ffcf59a-906c-496f-99ac-e1d678317f25.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/97baa49b-38a4-4a50-8b79-c7f56eff9a4c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/f89a5a1d-b8da-4dc8-9f0e-36a75dfd848d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/a02cc26f-562b-42f7-8fb6-332a9341a6f8.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/b10446a6-d5ec-4f0f-a10e-479c1ed3902c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/ae8905d1-904b-4764-a21f-725a3ccfe2af.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/a9099e51-f083-4859-837c-3962653e366b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/c2d343b7-2aae-4c7a-85aa-b6b69b5cce0d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/7935b075-831d-4787-b8c0-3c79d232e7cf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/17904a3e-b5a1-49dc-8dad-3268d1a87d7d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/7abc08d4-e795-4de3-bab4-82fb1d19c2c9.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/db324a28-ee6d-403e-84d5-a69bb11481a7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-39618986/original/63dac598-84fa-4df2-8899-b10bec42ecf4.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/1fcf88dc-90de-4e90-a2ea-369bae9d8672.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 28.63505,
      "lng": 77.22547,
      "persons": 3,
      "reviewsCount": 59,
      "rating": 4.86,
      "type": "Private room in bed and breakfast",
      "userId": 152138126,
      "address": "New Delhi, Delhi, India",
      "amenityIds": [
        1,
        129,
        67,
        4,
        5,
        9,
        11,
        77,
        79,
        16,
        23,
        90,
        91,
        30,
        31,
        100,
        101,
        40,
        41,
        42,
        44,
        45,
        46,
        57,
        61
      ],
      "previewAmenities": [
        "Air conditioning",
        "Wifi",
        "Free parking"
      ],
      "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
      "price": {
        "rate": 53,
        "currency": "USD",
        "total": 53,
        "priceItems": [
          {
            "amount": 41
          },
          {
            "amount": 7
          },
          {
            "amount": 5
          }
        ]
      }
    }
]
}

// Function to display listings
function displayListings(listings) {
    listingsContainer.innerHTML = ""; // Clear previous listings

    listings.forEach(listing => {
        const card = document.createElement("div");
        card.classList.add("listing-card");

        card.innerHTML = `
            <h2>${listing.name}</h2>
            <p>City: ${listing.city}</p>
            <p>Price: ${listing.price.currency} ${listing.price.rate}</p>
            <p>Beds: ${listing.beds}</p>
            <p>Bathrooms: ${listing.bathrooms}</p>
            <p>Rating: ${listing.rating}</p>
            <p>Reviews: ${listing.reviewsCount}</p>
            <p>Type: ${listing.type}</p>
            <p>Location: ${listing.address}</p>
            <p>Amenities: ${listing.previewAmenities.join(', ')}</p>
        `;

        listingsContainer.appendChild(card);
    });
}

// Event listener for the search button
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const apiUrl = `https://www.airbnb.com/listings?search=${searchTerm}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        displayListings(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});