import React from "react";

const Review = () => {
  return (
    <div>
      <h2 className=" my-5 Review-header p-3 m-3 mx-auto text-center">Top Reviewers</h2>
     

      <div class="card-deck">
        <div class="card w-75 mx-auto">
         

          <img className="mx-auto w-25 h-25 rounded-circle" src="https://i.ibb.co/nD8Qk6C/smiling-man-outdoors-in-the-city-picture-id1179420343-b-1-k-20-m-1179420343-s-612x612-w-0-h-c9-Z3-Dy.jpg"  alt="" />
          
          <div class="card-body">
            <h4 class="card-title font-bold text-center">
              Very good tour and travel agency
            </h4>
            <p class="card-text ">
              I found the service and response of this travel agency to be
              excellent. Easily 5-stars. My emails were promptly responded to,
              and everyone showed up when they were supposed to. The $110
              charged for my sedan ride to Bangkok for my family seemed like
              very good value.
            </p>
            <p class="card-text text-center">
              <small class="text-muted text-center"> 20March,2021 </small>
            </p>
          </div>
        </div>
        <div class="card w-75 mx-auto mt-3">
        

          <img  className="mx-auto w-25 h-25 rounded-circle" src="https://i.ibb.co/ZfMw2h8/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position-1368-132662.jpg" alt="" />
          <div class="card-body">
            <h4 class="card-title font-bold text-center">
              Perfect 4-day tour with Derleng!
            </h4>
            <p class="card-text">
              We were picked up at the airport on time by our driver and guide,
              Chamnan, for the next three days. We were brought to our hotel. We
              could choose to just relax or start the tour immediately. I
              decided to visit Ankgor Wat first. Our guide had great knowledge
              and his English was good. An Australian guy I met at Angkor Wat
              even asked to join me cause he didn’t understand his guide and
              Chamnan he understood very well! ; So the next two days the
              Australian guy accompagnied us.
            </p>
            <p class="card-text text-center">
              <small class="text-muted text-center">10 January,2021</small>
            </p>
          </div>
        </div>
        <div class="card w-75 mx-auto mb-4 mt-3">
    

          <img className="mx-auto w-25 h-25 rounded-circle" src="https://i.ibb.co/tzLcFc8/image-happy-brunette-man-wearing-260nw-1489874846.jpg" alt="" />
          <div class="card-body">
            <h5 class="card-title font-bold text-center">
              Everything was perfect and perfectly-arranged
            </h5>
            <p class="card-text">
              We just returned from our trip to Angkor temples. Without Derleng
              tour, our wonderful tour guide, and driver. This trip would be
              incomplete. Our tour guide who named John was really patient and
              understand that people from different cultures and background
              would extra time to absorb all information about history of
              Angkor. We did many things from the unbelievably structured Angkor
              ruins, thousand linga waterfalls on top of mountains, tonle sap
              lake, night market, old market and so many more.{" "}
            </p>
            <p class="card-text text-center">
              <small class="text-muted ">25 June,2021</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;