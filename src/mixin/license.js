
const license = {
  data() {
    return {
      licenses: [
        {
          id: 1,
          name: '基础服务',
          type: 'MANDATORY',
          dueDate: new Date(2018, 0, 1),
          earnedProfit: 9172,
          expectedProfit: 16888,
          cost: 6888,
          usageStatus: 'NORMAL',
          remainingQuantity: 4,
          totalQuantity: 20,
          remainingMonth: 10,
          totalMonth: 20
        },
        {
          id: 2,
          name: '智能菜单',
          type: 'EXTENDED',
          dueDate: new Date(2018, 3, 5),
          earnedProfit: 9172,
          expectedProfit: 16888,
          cost: 6888,
          usageStatus: 'WARNING',
          remainingQuantity: 2,
          totalQuantity: 20,
          remainingMonth: 1,
          totalMonth: 20
        },
        {
          id: 3,
          name: '智能厨房',
          type: 'EXTENDED',
          dueDate: null,
          earnedProfit: 0,
          expectedProfit: 0,
          cost: 0,
          usageStatus: 'NONE',
          remainingQuantity: 0,
          totalQuantity: 0,
          remainingMonth: 0,
          totalMonth: 0
        }
      ],
      purchases: [
        {
          id: 1,
          type: 'MANDATORY',
          name: '基本服务',
          description: '使用就有收益'
        },
        {
          id: 2,
          type: 'EXTENDED',
          name: '智能菜单',
          description: '让菜单因人而异'
        },
        {
          id: 3,
          type: 'EXTENDED',
          name: '智能厨房',
          description: '让后厨更高效有序'
        },
        {
          id: 4,
          type: 'EXTENDED',
          name: '智能运营',
          description: '做商家最好的助手'
        },
        {
          id: 5,
          type: 'EXTENDED',
          name: '智能订货',
          description: '比商家更了解自己的需求'
        },
        {
          id: 6,
          type: 'EXTENDED',
          name: '智能决策',
          description: '带着餐厅去旅行'
        }
      ]
    }
  },
  computed: {
    canProceed() {
      return this.purchases.find(p => p.quantity > 0 && p.month > 0) != null
    }
  },
  methods: {
    purchaseEdit(newPurchase) {
      const purchase = this.purchases.find(p => p.licenseId === newPurchase.licenseId)
      if (purchase != null) {
        purchase.quantity = quantity
        purchase.month = month
      } else {
        if (newPurchase.quantity > 0 && newPurchase.month > 0) {
          this.purchases.push(newPurchase)
        }
      }
    },
    async confirm() {
      const purchases = this.purchases
        .filter(p => p.quantity > 0 && p.month > 0)
        .map(p => {
          const license = this.licenses.find(l => l.id === p.licenseId)
          return {
            serviceId: p.licenseId,
            quantity: p.quantity,
            month: p.month,
            new: license.new
          }
        })

      const purchasesWithName = this.purchases
        .filter(p => p.quantity > 0 && p.month > 0)
        .map(p => {
          const license = this.licenses.find(l => l.id === p.licenseId)
          return {
            licenseId: p.licenseId,
            licenseName: license.name,
            quantity: p.quantity,
            month: p.month
          }
        })

      const result = await this.$api.getPurchasePackages(this.$city.current, purchases)

      this.$router.push({
        name: 'purchase-confirm',
        params: {
          purchases: purchasesWithName,
          packages: result.packgeList
        }
      })
    }
  }
}

export default license
