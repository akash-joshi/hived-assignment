At HIVED we strive to be lean and efficient in our operations. By collecting feedback from drivers about their deliveries, it is possible to identify and address issues that may improve the efficiency of future deliveries to the same or nearby addresses. For example, if multiple drivers **report difficulty parking** or **finding a specific building**, the delivery team can take steps such as providing more detailed instructions or improved map locations.

Since drivers complete numerous deliveries throughout the day, this feedback needs to be collected on their mobile device immediately following a delivery. 

The web application should be simple and easy to use, with a clear and concise interface that allows drivers to quickly provide feedback before continuing on their route.

Assume the driver would access the web application via a link that contains both the `deliveryId` and their `driverId` as query parameters. For example the link may resemble

> `https://feedback.hived.space/driver/delivery?deliveryId=654505b5-0e65-4d45-acb2-2196aece6d63&driverId=12345678`


## Assumed API Format

{
    "delivery-id": "654505b5-0e65-4d45-acb2-2196aece6d63",
    "recipient": {
        "address": {
            "address-line-1": "1a Old Nichol St",
            "town": "London",
            "postcode": "E2 7HR"
        }
    },
    "delivery": {
        "delivery-alternative": {
            "alternative-type": "safe-place",
            "alternative-notes": "Please leave the package inside the mail room"
        }
    }
}