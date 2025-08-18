import React, { useState } from 'react'
import { Heart, Star, MessageSquare, Send, CheckCircle } from 'lucide-react'

interface SurveyQuestion {
  id: string
  question: string
  type: 'rating' | 'multiple_choice' | 'text'
  options?: string[]
  required: boolean
}

interface SurveyResponse {
  questionId: string
  answer: string | number
}

const WellbeingSurvey: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<SurveyResponse[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isAnonymous, setIsAnonymous] = useState(true)

  const surveyQuestions: SurveyQuestion[] = [
    {
      id: '1',
      question: 'How would you rate your overall job satisfaction?',
      type: 'rating',
      required: true
    },
    {
      id: '2',
      question: 'How satisfied are you with your work-life balance?',
      type: 'rating',
      required: true
    },
    {
      id: '3',
      question: 'How would you rate your stress level at work?',
      type: 'rating',
      required: true
    },
    {
      id: '4',
      question: 'How supported do you feel by your manager?',
      type: 'rating',
      required: true
    },
    {
      id: '5',
      question: 'How would you rate your overall well-being?',
      type: 'rating',
      required: true
    },
    {
      id: '6',
      question: 'What aspects of your work environment contribute most to your well-being?',
      type: 'multiple_choice',
      options: [
        'Flexible work hours',
        'Supportive colleagues',
        'Clear communication',
        'Professional development opportunities',
        'Work-life balance policies',
        'Health and wellness programs'
      ],
      required: true
    },
    {
      id: '7',
      question: 'What challenges do you face that impact your well-being at work?',
      type: 'multiple_choice',
      options: [
        'High workload',
        'Lack of recognition',
        'Poor communication',
        'Limited growth opportunities',
        'Work-life imbalance',
        'Health concerns',
        'None of the above'
      ],
      required: true
    },
    {
      id: '8',
      question: 'How likely are you to recommend this company as a great place to work?',
      type: 'rating',
      required: true
    },
    {
      id: '9',
      question: 'What suggestions do you have to improve employee well-being?',
      type: 'text',
      required: false
    }
  ]

  const handleResponse = (questionId: string, answer: string | number) => {
    setResponses(prev => {
      const existing = prev.find(r => r.questionId === questionId)
      if (existing) {
        return prev.map(r => r.questionId === questionId ? { ...r, answer } : r)
      }
      return [...prev, { questionId, answer }]
    })
  }

  const getResponse = (questionId: string) => {
    return responses.find(r => r.questionId === questionId)?.answer
  }

  const canProceed = () => {
    const currentQuestion = surveyQuestions[currentStep]
    if (!currentQuestion.required) return true
    const response = getResponse(currentQuestion.id)
    return response !== undefined && response !== ''
  }

  const handleNext = () => {
    if (currentStep < surveyQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    // In a real app, this would send the survey data to the backend
    console.log('Survey responses:', responses)
  }

  const renderQuestion = (question: SurveyQuestion) => {
    const currentResponse = getResponse(question.id)

    switch (question.type) {
      case 'rating':
        return (
          <div className="space-y-4">
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleResponse(question.id, rating)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    currentResponse === rating
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {rating}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Very Poor</span>
              <span>Excellent</span>
            </div>
          </div>
        )

      case 'multiple_choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label
                key={option}
                className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={currentResponse === option}
                  onChange={(e) => handleResponse(question.id, e.target.value)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )

      case 'text':
        return (
          <textarea
            value={currentResponse as string || ''}
            onChange={(e) => handleResponse(question.id, e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={4}
          />
        )

      default:
        return null
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your well-being survey has been submitted successfully. Your feedback helps us create a better workplace for everyone.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> Your responses are {isAnonymous ? 'anonymous' : 'confidential'} and will be used to improve workplace well-being programs.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = surveyQuestions[currentStep]
  const progress = ((currentStep + 1) / surveyQuestions.length) * 100

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-t-lg text-white">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-6 h-6" />
          <h1 className="text-xl font-bold">Employee Well-being Survey</h1>
        </div>
        <p className="text-green-100">Help us understand and improve your workplace experience</p>
      </div>

      {/* Progress Bar */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Question {currentStep + 1} of {surveyQuestions.length}
          </span>
          <span className="text-sm font-medium text-gray-900">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {currentQuestion.question}
            {currentQuestion.required && <span className="text-red-500 ml-1">*</span>}
          </h2>
          {renderQuestion(currentQuestion)}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <div className="flex items-center gap-4">
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>Submit anonymously</span>
            </label>
          </div>

          {currentStep === surveyQuestions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit Survey
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-4 rounded-b-lg">
        <p className="text-xs text-gray-600 text-center">
          Your responses are confidential and will be used to improve workplace well-being programs. 
          Individual responses will not be shared with your manager or colleagues.
        </p>
      </div>
    </div>
  )
}

export default WellbeingSurvey
