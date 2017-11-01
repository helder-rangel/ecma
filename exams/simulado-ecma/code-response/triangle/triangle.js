module.exports = class Triangle {

  constructor(edge1, edge2, edge3) {
    this.edges = [edge1, edge2, edge3]
    this.edges.sort((a, b) => a > b)
  }

  kind() {
    if(!this.isTriangle())
      throw "Not Triangle"

    let checkUniq = (uniq, element) => uniq.includes(element)

    let addIfNotInclude = (uniq, element) => {
      if(!checkUniq(uniq, element))
        uniq.push(element)
      return uniq
    }

    let uniq = this.edges.reduce(addIfNotInclude, [])

    let kinds = ['equilateral', 'isosceles', 'scalene']

    return kinds[uniq.length - 1]
  }

  isTriangle() {
    let isPositive = edge => edge > 0

    let hasEdgesPositives = this.edges.every(isPositive)

    let violateTriangle = edges => edges[0] + edges[1] > edges[2] ? true : false

    let isValidTriangle = violateTriangle(this.edges) && hasEdgesPositives

    return isValidTriangle
  }
}
