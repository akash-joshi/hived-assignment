import { useServerData } from 'components/hooks/useServerData'
import { useState } from 'react'

function App() {
  const [formState, setFormState] = useState({
    'delivery-ease': 3,
    'location-correct': true
  })
  const [coords, setCoords] = useState<GeolocationCoordinates | null>(null)
  const { deliveryData, driverData } = useServerData()

  const validateInput = (formData: FormData) => {
    const deliveryEase = formData.get('delivery-ease')
    const locationCorrect = formData.get('location-correct')

    setFormState({
      'delivery-ease': parseInt(deliveryEase as string),
      'location-correct': locationCorrect === 'on'
    })
  }

  return (
    <div className="relative m-2 overflow-hidden">
      <h1 className="text-2xl">
        <span> Hi {driverData.preferredName}, rate your delivery to</span>{' '}
        <span style={{ whiteSpace: 'nowrap' }}>
          {deliveryData.recipient.address.postcode}
        </span>
      </h1>
      <form
        onChange={(event) => {
          const formData = new FormData(event.currentTarget)
          validateInput(formData)
        }}
        method="post"
        action={`/feedback`}
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Ease of Delivery</span>
          </div>
          <div className="rating rating-lg">
            <input
              type="radio"
              name="delivery-ease"
              className="mask mask-star-2 bg-green-500"
              value="1"
            />
            <input
              type="radio"
              name="delivery-ease"
              className="mask mask-star-2 bg-green-500"
              value="2"
            />
            <input
              type="radio"
              name="delivery-ease"
              className="mask mask-star-2 bg-green-500"
              value="3"
              defaultChecked
            />
            <input
              type="radio"
              name="delivery-ease"
              className="mask mask-star-2 bg-green-500"
              value="4"
            />
            <input
              type="radio"
              name="delivery-ease"
              className="mask mask-star-2 bg-green-500"
              value="5"
            />
          </div>
        </label>

        {formState['delivery-ease'] < 3 && (
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">What went wrong?</span>
            </div>
            <textarea
              name="whats-wrong"
              className="textarea textarea-bordered focus:outline-none"
            ></textarea>
          </label>
        )}

        <label className="label cursor-pointer">
          <span className="label-text">Was the location correct?</span>
          <input
            name="location-correct"
            type="checkbox"
            className="toggle toggle-primary"
            defaultChecked
          />
        </label>

        {!formState['location-correct'] && (
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Edit Address</span>
            </div>
            <input
              name="address-line-1"
              className="input input-bordered my-1"
              defaultValue={deliveryData.recipient.address['address-line-1']}
            />
            <input
              name="town"
              className="input input-bordered my-1"
              defaultValue={deliveryData.recipient.address.town}
            />
            <input
              name="postcode"
              className="input input-bordered my-1"
              defaultValue={deliveryData.recipient.address.postcode}
            />
            {navigator.geolocation && (
              <>
                <button
                  onClick={() => {
                    navigator.geolocation.getCurrentPosition((position) => {
                      setCoords(position.coords)
                    })
                  }}
                  className="btn btn-secondary max-w-fit"
                  type="button"
                >
                  Get Current Location{coords ? ' again' : ''}
                </button>
                <input hidden name="latitute" value={coords?.latitude} />
                <input hidden name="longitude" value={coords?.longitude} />
              </>
            )}
          </label>
        )}

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Overall Review</span>
          </div>
          <div className="rating rating-lg">
            <input
              type="radio"
              name="overall-review"
              className="mask mask-star-2 bg-green-500"
              value="1"
            />
            <input
              type="radio"
              name="overall-review"
              className="mask mask-star-2 bg-green-500"
              value="2"
            />
            <input
              type="radio"
              name="overall-review"
              className="mask mask-star-2 bg-green-500"
              value="3"
              defaultChecked
            />
            <input
              type="radio"
              name="overall-review"
              className="mask mask-star-2 bg-green-500"
              value="4"
            />
            <input
              type="radio"
              name="overall-review"
              className="mask mask-star-2 bg-green-500"
              value="5"
            />
          </div>
        </label>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Any additional comments?</span>
          </div>
          <textarea
            name="comments"
            className="textarea textarea-bordered focus:outline-none"
          ></textarea>
        </label>

        <div className="label flex justify-end">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
