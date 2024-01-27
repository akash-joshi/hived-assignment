// This hook is the assumed SSR pipeline for generating client-side data in the actual app.

const getDeliveryData = (_deliveryId: string) => ({
  'delivery-id': '654505b5-0e65-4d45-acb2-2196aece6d63',
  recipient: {
    address: {
      'address-line-1': '1a Old Nichol St',
      town: 'London',
      postcode: 'E2 7HR'
    }
  },
  delivery: {
    'delivery-alternative': {
      'alternative-type': 'safe-place',
      'alternative-notes': 'Please leave the package inside the mail room'
    }
  }
})

const getDriverResponse = (_driverId: string) => ({
  driverId: '12345678',
  firstName: 'Akash',
  lastName: 'Joshi',
  preferredName: 'Akash'
})

export const useServerData = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const deliveryId = urlParams.get('deliveryId')
  const driverId = urlParams.get('driverId')

  const deliveryData = getDeliveryData(deliveryId!)
  const driverData = getDriverResponse(driverId!)

  return {
    deliveryData,
    driverData
  }
}
