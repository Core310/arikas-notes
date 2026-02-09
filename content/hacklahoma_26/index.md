## Inspiration

Facial recognition feels like future tech reserved for governments or massive corporations yet most people don't realize just how accessible it is to link a real world face to an online identity. We built FNR (Facial Net Recognizer) to raise awareness about internet privacy and demonstrate why our personal data policies need to catch up with technology.

Technology is advancing at a pace that is difficult to track, often leaving our digital footprints exposed in ways we don't anticipate. To prove this point, we conducted a contained experiment: given a sample population, a public list of attendees, and a powerful modern facial classifier, could we build a system that identifies people walking by in real time? We wanted to show what is possible using open source tech stacks that have been available for years.

## What it does

FNR is a real time biometric surveillance dashboard. It captures live video from a stereo depth camera, detects faces in the crowd, and instantly attempts to match them against a database of known individuals with attached profile links.

When a match is found, the system overlays the person's name, their distance from the camera, and their specific bio link or social profile URL in 3D space. If the person is unknown, the system creates a new Identity Vector and begins tracking them, learning their face from multiple angles to build a robust profile on the fly. It includes a God Mode dashboard that allows the operator to merge these unknown angles into a single identity, effectively training the AI in real time.

## How we built it

- **ZED** 2 Stereo Camera used for depth sensing, 3D positional tracking, and neural object detection to ensure we only scan real humans preventing spoofing with photos or screens.
    
- **InsightFace** (ArcFace) is our core recognition engine running on ONNX Runtime GPU to extract 512 dimensional vectors from faces in milliseconds.
    
- **GFPGAN** is a Generative Adversarial Network used for real time super resolution to hallucinate missing details and upscale blurry faces at a distance so the recognizer can actually see them.
    
- **MongoDB** stores the vector embeddings and thumbnail snapshots for our recognition engine.
    
- **Streamlit** powers the Human in the Loop dashboard where we view live data, merge duplicate identities, and manage the vector database.
    
- **Flask** streams the processed video feed with overlay graphics from our backend detection script to the frontend dashboard.
    

## Challenges we ran into

- **Eager** AI was our biggest hurdle initially because our model was too excited to meet new people.
    
- **Jittery** predictions occurred when a user turned their head slightly or the lighting changed, causing the model to register them as multiple different people within a few seconds.
    
- **Voting** logic had to be engineered using a complex temporal buffer of the last 10 frames to smooth out these predictions.
    
- **Registration** guards were implemented using pose estimation to reject side profiles and blur checks to reject low quality data before it ever reached the database.
    
- **Distance** and resolution were major issues because facial recognition models typically fail when a person is more than 2 meters away and the face crop becomes too pixelated.
    
- **Super** resolution pipelines were built using GFPGAN to artificially upscale and restore the face before recognition, which we had to optimize to run asynchronously to avoid frame drops.
    
- **Liveness** detection was a logic nightmare because simple depth checks failed at a distance where even a real face looks flat to a stereo camera.
    
- **Neural** object detection from the ZED camera was used to cross reference face bounding boxes with detected 3D human skeletons, ensuring a face is only processed if it is attached to a valid moving body.
    
- **Merging** identities was a UX challenge because we needed a way to tell the model that different view angles belonged to the same person.
    

## Accomplishments that we're proud of

We successfully integrated a Generative Super Resolution model into a real time video pipeline without killing our frame rate. Watching a blurry face turn into a crisp, recognizable ID tag in real time feels like magic. We are also proud of the intuitive Merge Workflow we built, which allows us to teach the AI just by dragging and dropping different angles of a person in our dashboard to fuse them into a single identity.

## What we learned

We learned that the gap between open source code and a surveillance state is terrifyingly small. The tools we used are free and accessible. We also learned a great deal about vector search; we aren't matching images pixel for pixel but rather converting faces into mathematical vectors and calculating the cosine similarity between them. This made us realize that your face is just a string of numbers to a computer, and that string is remarkably hard to hide.

## What's next for FNR Facial Net Recognizer

Our immediate next step is optimizing the Frontalization pipeline to better handle extreme profile views. Beyond that, we want to flip the script: we plan to research Adversarial Patches, which are clothing or makeup patterns that can poison the data stream and make these very models fail. If we can build the surveillance tool, we can also build the shield to protect against it.