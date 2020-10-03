# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

# Building A Blockchain With Object Oriented Programming

### Getting Started

- Fork and Clone
- cd into the directory
- npm install
- npm run test (to check that everything was installed correctly)

Starter code has been provided.

**DO NOT MODIFY ANY CODE AT THE TOP OF solution.js**

### Step One

Take a look at the file called `ValidityChecker.js`, do not modify this file in any way.

We need to leverage these methods in order to build our blockchain. The file is already made available to you in `solution.js` via the `require()` at the top of `solution.js`.

Our `Blockchain` class needs to be able to access the methods inside of `ValidityChecker`.

Inheret the methods into the `BlockChain` class.

Run `npm run test` to check your work.

### Step Two

We need to add a couple of methods in order to build our blockchain. Start by creating a function in the `BlockChain` class called `addBlock`, pay attention to naming here. The test will fail if the function is misspelled.

This `addBlock` function should accept one parameter `block`.

Add this code to the `addBlock` method. Make sure to keep it at the top.

```js
let index = this.chain.length
let prevHash = this.chain.length ? this.chain[this.chain.length - 1].hash : 0
```

Run `npm run test` to check your work.

### Step Three

Our `addBlock` function should accept a parameter of block, add it to our blockchain and return it later on.

Before we add a new block to our blockchain, we need to ensure it's valid. Write code that checks if the information being created is correct by using the `checkValidTransaction` from our `ValidityChecker` class. This method will return either true or false.

If the transaction is valid we need to create a new instance of the `Block` class and add it to our chain. The `Block` class accepts some sort of data, an index and a previousHash. You'll have to figure out what data should be sent on your own.

If the transaction is invalid we need to return an error.
We can do that by utilizing javascipts error class.

```js
throw new Error('Transaction is Invalid')
```

- **[More on the `Error` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)**

- **[What is `throw`?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)**

Run `npm run test` to check your work.

### Step Four

Let's test out our new `addBlock` method.

At the bottom of the file, above the `module.exports`, create a new instance of the `BlockChain` class.

We should now be able to access the `addBlock` method.

Add a new block the our blockchain. The data should be an object containing a sender, recipient and amount.

Ex:

```js
{
    sender:String,
    recipient:String,
    amount:Number
}
```

If every step so far was done correctly, the new transaction should be in our blockchain.
Log the instance of the `BlockChain` class you've created and verify your work.

Congratulations you've successfully added our first transaction to our blockchain!

### Step Five

Now that you've added your first transaction, we need to ensure that every transaction is tamper proof.

A method has been provided in the `ValidityChecker` class that will allow you to do this.

Log the result of the `validityChecker` to your console. Remember we should only access this method from our created instance of the `Blockchain` class.

<details>
<summary>Helpful tip</summary>
Tag your console.log for easier viewing in the terminal.

Ex:

```js
console.log('My Tag', someValue)
```

</details>

If the result comes back true then our blockchain is good to go!

### Step 6

We need a way to get specific transactions for viewing.

Create a `findTransaction` method in our `BlockChain` class. This method should accept one parameter `index` and should return a transaction at the index.

Log this transaction to the console by accessing it underneath of where you added a new block.

Run `npm run test` to check your work.

### Step 7

Let's ensure that our blockchain is tamper proof. Underneath of where you first checked if the chain was valid, reassign a transactions sender to something different, It may be helpful here to log the `Blockchain` chain property to see how the data is structured.

Put a console log before and after the modification to ensure that it was done properly. Make sure to log the specific transaction that you modified!

Now check if the chain is valid once more. It should be false if done correctly.

Our blockchain is definitely tamper proof!

### Step 8

Just in case we ever want to be a bit evil, we should create a method that wipes the entire chain. Yes, we're gonna be those people :)

Create a method called `destroyChain`. This method should wipe the entire blockchain.

Run `npm run test` to check your work.

If the test passes... We are now evil people :) .... JK

## Closing

If all of your tests pass successfully, congrats you just built your first blockchain! Let's build the next Bitcoin!

Make sure to submit a pull request once you've finished!

![Giphy](https://media.giphy.com/media/4xpB3eE00FfBm/giphy.gif)

## Bonus

Create a function that creates a large amount of transactions and adds them to our blockchain. This can be a seperate method.

<details>
<summary>Hint</summary>
You may want to look into:

- `new Array`
- `array.fill`
</details>
<br>
You've also been provided with a package called faker that allows us to generate some awesome fake data quickly! It's imported at the top of the `solution.js file`. Happy Coding!

**[More On Faker](https://github.com/Marak/Faker.js#readme)**

Try making 10, 50, 100 or maybe 1000 transactions!
