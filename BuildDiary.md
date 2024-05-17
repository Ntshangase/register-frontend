## week 2
- the first week wasn't journaled but i basically created the backend using java springboot and I did the APIs, now i have them waiting to connect. I also managed to create the frontend with react, JSX, which is like react saying just write your javascript and we will handle the rendering.
- today i got the react router to work, fixed an issue as the way you load your routes changes from using `component={home}` to `element={<Home />}`. I had to figure that out myself using the react--route doc.
- I need to get the .fetch() working by the week.
- I decided to journal since i don't want to forget what i know, more specifically be able to talk about things i have done.
- `bug solved` I had a problem my fetch was returning *undefined* struggled for like to days, but the issue was i needed to `return response.json()`.
- the fetch() method is build to be flexible and return different types of data: images, plain text, xml, ect. therefore forcing it to have a return response.json by default would limit it's flexibility, i was thinking the response.json() is returned by default but you have to specify.

## week I don't know.
- The APIs' is working.
- Fixed the CORS issue, then i had to do some `ObjectMapping` using the `Jackson core` dependency.
- I also learned a lot about List<> and ArrayList<>();

## week 
- API GOD vs CORS KING
- I have managed to get a collection of data to be in a json format, hardwork paysoff.
- The net goals are figure out the use state in javascript and understand its implimentation, From what i know i like this because i allows you to store data from an outside source into the application without having to make the call everytime you use the data.
- safe to say i have an understanding of the map() function.
