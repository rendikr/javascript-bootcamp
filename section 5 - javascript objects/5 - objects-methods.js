let restaurant = {
  name: "Kintan",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty: function (partySize) {
    let hasAvailableSeat = this.checkAvailability(partySize)
    if (hasAvailableSeat) {
      this.guestCount = this.guestCount + partySize
    }
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize
  }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
