// Assuming you are using SAPUI5
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Input",
    "sap/m/Label"
   

  ], function (Controller, Dialog, Button, Input, Label) {
    "use strict";
  
    return Controller.extend("gms.gmsserviceprofile.controller.serviceProfile", {
      // ...
  
      onInit: function () {
        // ...
      },
  
      // Function to handle the press event of the "Edit Node" button
      onEditNode: function (oEvent) {
        var oNode = oEvent.getSource().getBindingContext().getObject();
      
        // Create a dialog
        var oDialog = new Dialog({
          title: "Edit Node",
          content: [
            new Label({
              text: "Service Parameter:",
              width: "100%"
            }),
            new Input({
              value: oNode.title,
              placeholder: "Enter new title",
              width: "100%"
            }),
            new Label({
              text: "Rank:",
              width: "100%"
            }),
            new Input({
              value: oNode.attributes[0].label, // Assuming there is at least one attribute
              placeholder: "Enter new property",
              width: "100%"
            }),
            new Label({
              text: "Value:",
              width: "100%"
            }),
            new Input({
              value: oNode.attributes[0].value,
              placeholder: "Enter new value",
              width: "100%"
            }),
            new Label({
              text: "Parent ID:",
              width: "100%"
            }),
            new Input({
              value: oNode.parentId, // Assuming parentId is a property of the node
              placeholder: "Enter new Parent ID",
              width: "100%"
            }),
            // Add other Input fields for other node details as needed
          ],
          beginButton: new Button({
            text: "Save",
            press: function () {
              var sNewTitle = oDialog.getContent()[1].getValue();
              var sNewProperty = oDialog.getContent()[3].getValue();
              var sNewValue = oDialog.getContent()[5].getValue();
              var sNewParentId = oDialog.getContent()[7].getValue();
      
              // Update the node details with the new values
              // (You need to implement a function to update the model)
              // For example: this.updateNodeDetails(oNode, { title: sNewTitle, parentId: sNewParentId, ... });
              // Update the attribute details
              // For example: this.updateAttributeDetails(oNode, 0, { label: sNewProperty, value: sNewValue });
      
              oDialog.close();
            }
          }),
          endButton: new Button({
            text: "Cancel",
            press: function () {
              oDialog.close();
            }
          })
        });
      
        // Open the dialog
        oDialog.open();
      },
      
      
  
      // Function to handle the press event of the "Add Child" button
      onAddChild: function () {
        // Create a dialog
        var oDialog = new Dialog({
          title: "Add Child",
          content: [
            new Input({
              placeholder: "Enter Parent ID",
              width: "60%"
            }),
            new Input({
              placeholder: "Enter Service Parameter",
              width: "60%"
            }),
            new Input({
              placeholder: "Enter Rank",
              width: "60%"
            })
          ],
          beginButton: new Button({
            text: "Save",
            press: function () {
              // Get values from the input fields
              var sParentId = oDialog.getContent()[0].getValue();
              var sServiceParameter = oDialog.getContent()[1].getValue();
              var sRank = oDialog.getContent()[2].getValue();
              
              // Add logic to create a new child node with the provided details
              // For example: this.addChildNode(sParentId, sServiceParameter, sRank);
              oDialog.close();
            }
          }),
          endButton: new Button({
            text: "Cancel",
            press: function () {
              oDialog.close();
            }
          })
        });
  
        // Open the dialog
        oDialog.open();
      },
  
      // ...
    });
  });
  