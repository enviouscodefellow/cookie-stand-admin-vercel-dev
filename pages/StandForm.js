import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';

export default function CookieStandForm() {
  const { user } = useAuth();
  const { createResource } = useResource();

  function handleSubmit(event) {
    event.preventDefault();
    const info = {
      location: event.target.location.value,
      description: "",
      minimum_customers_per_hour: parseInt(event.target.minimum.value),
      maximum_customers_per_hour: parseInt(event.target.maximum.value),
      average_cookies_per_sale: parseFloat(event.target.average.value),
      owner: user.id,
    };
    createResource(info);
  }

  return (
    <form
      className="w-8/12 p-2 mx-auto my-4 bg-emerald-300 rounded-lg"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <div className="">
          <legend className="w-2/3 text-center">ADD LOCATION</legend>
        </div>
        <div className="flex justify-between">
          <input className="w-2/3" placeholder="Cookie Stand Location" name="location" />
          <button className='pt-5 pb-5 pl-20 pr-20 m-3 font-bold bg-emerald-500 rounded-lg'>CREATE STAND</button>
        </div>
        <div className="flex justify-between m-3" >
          <legend className='text-center'>MINIMUM CUSTOMERS PER HOUR</legend>

          <legend className='text-center'>MAXIMUM CUSTOMERS PER HOUR</legend>

          <legend className='text-center'>AVERAGE COOKIES PER SALE</legend>
        </div>
        <div className="flex justify-between m-3">
          <input className="w-1/3pl-4pr-4" placeholder="minimum" name="minimum" defaultValue={0} />

          <input className="w-1/3pl-4pr-4" placeholder="maximum" name="maximum" defaultValue={0} />

          <input className="w-1/3pl-4pr-4" placeholder="average" name="average" defaultValue={0} />
        </div>
      </fieldset>
    </form>
  );
}
