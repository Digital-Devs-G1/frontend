function render(container)
{
  container.innerHTML += `
    <div class="modal fade" id="detailModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
       <div class="modal-dialog">
           <div class="modal-content">
               <div class="modal-header">
                   <h5 class="modal-title" id="staticBackdropLabel">Detalles</h5>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                 <div action="" id="detailList">
         
                 </div>
               </div>
           </div>
       </div>
   </div>
  `;
}

function renderDetails(fields) 
{  
   
    let container = document.getElementById("detailList");
    container.innerHTML = "";
    fields.forEach(field => {
      container.innerHTML += `<p><span>${field.label}: </span>${field.value}</p>`; 
    });
}

const DetailComponent = {
  render: render,
  renderDetails : renderDetails
};

export default DetailComponent;
