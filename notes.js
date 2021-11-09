const [createCheckout, { data, loading, error }] = useMutation(CHECKOUT_CREATE_MUTATION);

if (loading) return 'Loading...';
if (error) console.log(error);
if (error) return `Error! ${error.message}`;


const cartInput = {
    lineItems: [{ variantId: selected.node.id, quantity: 1 }]
  }     

await createCheckout({ variables: {input: cartInput } })
