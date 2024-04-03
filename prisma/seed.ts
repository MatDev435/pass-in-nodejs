import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'fcdc488b-640b-4043-9e64-307eefaa37b3',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs apaixonados por programação',
      maximumAttendees: 120,
    },
  })
}

seed().then(() => {
  console.log('Database seeded')
  prisma.$disconnect()
})
