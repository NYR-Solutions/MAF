   computedWOTimerDuration(item)
   {
     let duration=0;
     if (item && item.labtrans && item.labtrans.length > 0) {
       // NOTE: find renverra le premier enregistrement de main-d'œuvre correspondant. En théorie, il devrait toujours y en avoir qu'un seul.
       let labor=item.labtrans.find((member) => (member.timerstatus_maxvalue === "ACTIVE" && member.laborcode === this.app.client.userInfo.labor.laborcode));
       if (labor)
       {
         let startDateTime=this.app.dataFormatter.convertISOtoDate(labor.startdatetime);
         let currentDate=this.app.dataFormatter.currentDate();
         duration=Math.abs((currentDate - startDateTime)) / 3600000;
       }
     }
     return duration;
   }
   async onAfterLoadData(dataSource,items)
   {
     if (dataSource && dataSource.name=="woDetailResource" && items)
     {
       items.forEach((item) => {
        let duration=this.computedWOTimerDuration(item);
        item.computedtimerduration=duration;
       });
     }
   }

