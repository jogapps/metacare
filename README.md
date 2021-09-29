## About METACARE Godspower Project

## Handled Tasks
 - Starwars movie listings with comments
 - Add Comments
 - View Comments
 
## Routes

 - MOVIE LISTINGS WITH COMMENTS
 - "/"
 
 - ADD COMMENTS TO A MOVIE
 - "/comments/add"
 - Body - All fields are required: movie_id, comment, ip
 
 - GET COMMENTS OF A MOVIE
 - "/comments/:id" 
 - where :id is the movie id

## Request Response
 - {
 -    status: true/false,
 -    message: "...",
 -    data: []
 - }