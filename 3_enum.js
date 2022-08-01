var Membership;
(function (Membership) {
    Membership[Membership["NewMember"] = 0] = "NewMember";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var membershipReverse = Membership[2];
console.log(typeof membership);
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["Instagram"] = "Instagram";
    SocialMedia["FaceBook"] = "Facebook";
    SocialMedia["Telegram"] = "Telegram";
})(SocialMedia || (SocialMedia = {}));
var socialMedia = SocialMedia.Instagram;
console.log(socialMedia);
