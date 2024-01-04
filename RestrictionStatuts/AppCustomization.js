//NYR Solutions - Maximo4you.fr

woStatusFilter(item) {
  // Retourne l'inverse de nos résultats souhaités.
  return !['WMATL', 'INPRG', 'COMP'].includes(item.value);
}

async onAfterLoadData(dataSource, items) {
  if (dataSource && dataSource.name === "dsstatusDomainList") {
    // Assurez-vous qu'il y a au moins un enregistrement.
    if (items && items.length > 0) {
      let filteredItems = items.filter(this.woStatusFilter);
      await dataSource.deleteItems(filteredItems);
    }
  }
}
