


var width=1000;
var height=500;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
// Node class 
class Node 
{ 
	constructor(data,x,y) 
	{ 
		this.data = data; 
		this.left = null; 
      this.right = null; 
      this.x=x;
      this.y=y;
   } 
   
   inOrderPlotting(root) 
   {
     if (this !== null) 
     {
       
        if(this.left!==null)
        {
        this.left.inOrderPlotting(this);
        }
        
        console.log(this.data);
        ctx.font = "25px Arial";
        ctx.textAlign="center";
        ctx.fillText(this.data, this.x, this.y);
        ctx.beginPath();
        ctx.arc(this.x,this.y,25,0,2*Math.PI);
        ctx.stroke();
        
        ctx.beginPath();
         ctx.moveTo(root.x, root.y) ;
         ctx.lineTo(this.x, this.y);
        ctx.stroke();
        
        
       if(this.right!==null)
       {
       this.right.inOrderPlotting(this);
       }
       
     }

  }
} 
// Binary Search tree class 
class BinarySearchTree 
{ 
	constructor() 
	{ 
		// root of a binary seach tree 
		this.root = null; 
	} insert(data) 
   { 
      // Creating a node and initailising 
      // with data 
      var newNode = new Node(data); 
                  
      // root is null then node will 
      // be added to the tree and made root. 
      if(this.root === null) 
      {
         this.root = newNode; 
         this.root.x=width/2;
         this.root.y=height-400;
         
      }
      else
   
         // find the correct position in the 
         // tree and add the node 
         this.insertNode(this.root, newNode); 
   } 
   
   // Method to insert a node in a tree 
   // it moves over the tree to find the location 
   // to insert a node with a given data 
   insertNode(node, newNode) 
   { 
      // if the data is less than the node 
      // data move left of the tree 
      if(newNode.data < node.data) 
      { 
         // if left is null insert node here 
         if(node.left === null) 
         {
            node.left = newNode; 
            node.left.x=node.x-100;
            node.left.y=node.y+70;
         }
            else
   
            // if left is not null recurr until 
            // null is found 
            this.insertNode(node.left, newNode); 
      } 
    
      // if the data is more than the node 
      // data move right of the tree 
      else
      { 
         // if right is null insert node here 
         if(node.right === null) 
         {
            node.right = newNode; 
            node.right.x=node.x+100;
            node.right.y=node.y+70;
         }
         else
   
            // if right is not null recurr until 
            // null is found 
            this.insertNode(node.right,newNode); 
      } 
   } 
   
   getRootNode() 
   { 
       return this.root; 
   }   
   
    
}

   function findParent(root,val,parent)
   {
      if(root==null)
      {
         return root;
      }
      if(root.data==val)
      {
         return root;
      }
      else
      {
         findParent(root.left,val,root.data);
         findParent(root.right,val,root.data);
      }
   }
// helper method which creates a new node to 
// be inserted and calls insertNode 
//inorderLVR
function inOrderHelper(root) {
if (root !== null) {
   inOrderHelper(root.left);
   inorder=inorder+root.data+"->";
   console.log(root.data);

   inOrderHelper(root.right);
}
}
//preorderLRV
function preOrderHelper(root) {
   if (root !== null) {
      preOrderHelper(root.left);
      preOrderHelper(root.right);
      preorder=preorder+root.data+"->";
  
      console.log(root.data);
      
   }
   }
//PostorderVRL
function postOrderHelper(root) {
   if (root !== null) {
      postorder=postorder+root.data+"->";
  
      console.log(root.data);
      postOrderHelper(root.left);
      postOrderHelper(root.right);
      
      
   }
   }

var count=0;
var numarr=[0,0,0];
var inorder,postorder,preorder;
var BST = new BinarySearchTree(); 
document.querySelector("#inorder").addEventListener("click",function()
{
   
   var root=BST.getRootNode();
  
   inorder="";
   inOrderHelper(root);
   document.getElementById("result").innerHTML = "Inorder is:"+inorder;

   
});

document.querySelector("#preorder").addEventListener("click",function()
{
   console.log("display preorder called");   
   var root=BST.getRootNode();
  
   preorder="";
   preOrderHelper(root);
   
   document.getElementById("result").innerHTML = "Preorder is:"+preorder;

});

document.querySelector("#postorder").addEventListener("click",function()
{
   console.log("display postorder called");   
   var root=BST.getRootNode();
   postorder="";
   postOrderHelper(root);
   document.getElementById("result").innerHTML = "postorder is:"+postorder;

});


document.querySelector("#arraydisplay").addEventListener("click",function()
{
   console.log("display array");
 
   console.log("Entered array is:"+numarr);
   document.getElementById("result").innerHTML = "Entered array is:"+numarr;
});
function NumberEntered()
{
   
   
   var temp=document.getElementById("number").value;
   temp=parseInt(temp);
    numarr[count]=temp;
   BST.insert(temp);
   count++;
   var root=BST.getRootNode();
   root.inOrderPlotting(root);
   
   
}

