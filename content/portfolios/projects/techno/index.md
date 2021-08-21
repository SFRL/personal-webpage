---
title: Technosong Generator 
date: "2016-08-01"
thumbnail: ./techno.png
figcaption: Screenshot from inside the generator programmed in Max/MSP.
description: This is a project that I developed during the last year of my undergraduate. It's a programme that can generate an infinite number songs in an EDM style from a set of rules.
---

I switched my undergraduate degree from Electrical Engineering to Music Technology for my last year of study originally because I really didn't enjoy engineering at the time and wanted to pursue a career in music. While researching topics for my final project, I came across the programming language  <a rel="noopener noreferrer" target="_blank" href="https://cycling74.com/">Max/MSP</a> which made me realise that I could use my technical skills in a creative, musical context. 

I started this project by thinking about how generative algorithm could impact the way that artists produce music. Imagine a typical album by an artist, it probably has something around 10 songs. So regardless how much you like that album, after some time you will probably get bored of it at least for some time. But what if rather than producing a finished album, the artist would define **a strict set of rules from which an infinite number of songs in a certain style could be generated**? For the *Technosong Generator*, I attempted to achieve exactly that. I create a large map of possible states for harmony, melody, rhythm and instruments and probabilities for transitions between them (basically a large Markov Chain) to generate electronic dance music with a dark techno vibe. Have a listen at the result:

`youtube:https://www.youtube.com/watch?v=IxazMDFOIso`

Looking back at this project, I now know that a lot more sophisticated generative setups exist (<a rel="noopener noreferrer" target="_blank" href="https://dadabots.com/">check out databots</a> for a cool contemporary example), but nonetheless I showed that a generative model can be achieved with fairly simple methods to produce an interesting musical output. In any case, this project motivated me to further explore creative applications of technology and computer science ultimately leading to my PhD at the <a target="_blank" rel="noopener noreferrer" href="http://c4dm.eecs.qmul.ac.uk/">Centre for Digital Music</a>.   