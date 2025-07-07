function findNearest(userLat, userLng, locales) {
  const R = 6371; // radio de la Tierra en km

  return locales.reduce((nearest, local) => {
    const dLat = (local.lat - userLat) * Math.PI / 180;
    const dLng = (local.lng - userLng) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(userLat * Math.PI / 180) *
      Math.cos(local.lat * Math.PI / 180) *
      Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const dist = R * c;

    return dist < nearest.dist ? { ...local, dist } : nearest;
  }, { dist: Infinity });
}

export default findNearest;