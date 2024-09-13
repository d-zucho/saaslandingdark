import Feature from './Feature'
const features = [
  {
    title: 'Integration Ecosystem',
    description:
      'Enhance your productivity by connecting with your tools, keeping your essentials in one place.',
  },
  {
    title: 'Goal Setting and Tracking',
    description:
      'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.',
  },
  {
    title: 'Secure Data Encryption',
    description:
      'With end-to-end encryption, your data is securely stored and protected from unauthorized access.',
  },
]

export const Features = () => {
  return (
    <section className='bg-black text-white py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>
          Everything you need
        </h2>
        <p className='text-center mt-5 text-xl text-white/70 max-w-xl mx-auto'>
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>

        <div className='mt-16 flex flex-col sm:flex-row gap-4'>
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
