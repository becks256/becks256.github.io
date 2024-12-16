import React, { useState, useEffect, useRef } from "react"
import { FEEDBACK_DATA } from "../../utils"
import "./WorkWithMeSection.css"

export const WorkWithMeSection = () => {
  const [feedback, setFeedback] = useState(FEEDBACK_DATA[0].feedback)
  const [author, setAuthor] = useState()
  const [displayedText, setDisplayedText] = useState("")
  const typingTimeoutRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Function to type text character by character
    const typeWriter = (text, callback) => {
      let currentIndex = -1
      setDisplayedText("")
      setAuthor("")

      const type = () => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text.charAt(currentIndex))
          currentIndex++
          typingTimeoutRef.current = setTimeout(type, 30) // Adjust typing speed here
        } else {
          callback()
        }
      }

      type()
    }

    // Function to update feedback with a new random entry
    const updateFeedback = () => {
      const { name, feedback } =
        FEEDBACK_DATA[Math.floor(Math.random() * FEEDBACK_DATA.length)]
      typeWriter(feedback, () => {
        setTimeout(() => {
          setAuthor(name)
        }, 1000)
        setTimeout(() => {
          setFeedback(feedback)
        }, 7000) // Adjust this delay to ensure proper timing
      })
    }

    // Function to start the typing effect cycle
    const startTypingEffect = () => {
      updateFeedback() // Start typing effect immediately
      intervalRef.current = setInterval(() => {
        updateFeedback()
      }, feedback.length * 50 + 20000) // Adjust this formula to ensure proper timing
    }

    // Start the typing effect when component mounts
    startTypingEffect()

    // Cleanup function to clear timeouts and intervals
    return () => {
      clearTimeout(typingTimeoutRef.current)
      clearInterval(intervalRef.current)
    }
  }, []) // Empty dependency array to run effect only once when component mounts

  const skills = [
    "critical thinking",
    "innovation leadership",
    "process improvement & automation",
    "inversion techniques",
    "product development",
    "strategy & architecture",
    "design consultation",
    "print & digital design",
    "branding",
    "and so much more!",
  ]

  return (
    <div className="main-content work-with-me sm:px-16 my-96 py-48">
      <section className="md:mx-32 sm:mx-16">
        <p className="work-with-me--headline font-bold">
          What's it like to work with me?
        </p>

        <section className="flex gap-48 mb-48 sm:flex-column">
          <div className="work-with-me--paragraph">
            <p className="mt-0">
              There's a lot I bring to a team, for example...
            </p>
            <ul>
              {skills.map((skill, index) => (
                <li className="skill-item" key={"skill-" + index}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <section
            className="work-with-me--feedback-container"
            style={{ flex: "1 0 50%" }}
          >
            <p className="work-with-me--comment font-bold mt-0 mb-32">
              But you don't have to just take my word for it, check out what
              others have said about working with me:
            </p>
            <div className="work-with-me--feedback">
              <p className="m-0 font-medium font-italic typing">{displayedText}</p>
              <p className="font-bold font-italic work-with-me--author mb-0">
                {author && `~${author}`}
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  )
}
