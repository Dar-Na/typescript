enum Membership {
    NewMember,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2]

console.log(typeof membership)
console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
    Instagram = 'Instagram',
    FaceBook = 'Facebook',
    Telegram = 'Telegram'
}

const socialMedia = SocialMedia.Instagram
console.log(socialMedia)
